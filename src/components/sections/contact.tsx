'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

declare global {
  interface Window {
    Calendly?: any;
  }
}

type ContactFormData = {
  fullName: string;
  phone?: string;
  company?: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<'message' | 'call'>('message');
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMethod, setLoadMethod] = useState<'iframe' | 'script' | 'direct'>('iframe');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form submitted:', data);
    alert('Tin nhắn đã được gửi thành công!');
    reset();
  };

  // Get current domain for embed
  const getCurrentDomain = () => {
    if (typeof window !== 'undefined') {
      return window.location.hostname;
    }
    return 'localhost';
  };

  // Method 1: Direct iframe embed
  const loadCalendlyIframe = () => {
    setIsLoading(true);
    setCalendlyLoaded(false);
    setShowFallback(false);

    const timeout = setTimeout(() => {
      if (!calendlyLoaded) {
        setLoadMethod('script');
      }
    }, 5000);

    return () => clearTimeout(timeout);
  };

  // Method 2: Script-based embed
  const loadCalendlyScript = async () => {
    setIsLoading(true);
    
    try {
      const existingScript = document.querySelector('script[src*="calendly.com"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      script.onload = () => {
        if (window.Calendly && widgetRef.current) {
          widgetRef.current.innerHTML = '';
          
          try {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/dangtanliem37/30min',
              parentElement: widgetRef.current,
              prefill: {},
              utm: {},
              styles: {
                height: '500px'
              }
            });
            
            setCalendlyLoaded(true);
            setIsLoading(false);
          } catch (error) {
            setLoadMethod('direct');
          }
        } else {
          setLoadMethod('direct');
        }
      };

      script.onerror = () => {
        setLoadMethod('direct');
      };

      document.head.appendChild(script);

      setTimeout(() => {
        if (!calendlyLoaded && loadMethod === 'script') {
          setLoadMethod('direct');
        }
      }, 5000);

    } catch (error) {
      setLoadMethod('direct');
    }
  };

  // Method 3: Direct link method
  const loadDirectMethod = () => {
    setIsLoading(false);
    setCalendlyLoaded(true);
    setShowFallback(false);
  };

  useEffect(() => {
    if (activeTab === 'call') {
      if (loadMethod === 'iframe') {
        loadCalendlyIframe();
      } else if (loadMethod === 'script') {
        loadCalendlyScript();
      } else {
        loadDirectMethod();
      }
    }
  }, [activeTab, loadMethod]);

  const handleIframeLoad = () => {
    setCalendlyLoaded(true);
    setShowFallback(false);
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setLoadMethod('script');
  };

  const retryCalendly = () => {
    setShowFallback(false);
    setCalendlyLoaded(false);
    setLoadMethod('iframe');
  };

  // Generate Calendly URL
  const getCalendlyUrl = () => {
    const domain = getCurrentDomain();
    const params = new URLSearchParams({
      embed_domain: domain,
      embed_type: 'Inline',
      hide_landing_page_details: '1',
      hide_gdpr_banner: '1',
      primary_color: '2563eb',
      text_color: '1a1a1a',
      background_color: 'ffffff'
    });
    return `https://calendly.com/dangtanliem37/30min?${params.toString()}`;
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Left Content - 40% */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Liên hệ với chúng tôi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dù bạn đang lên kế hoạch nâng cấp hạ tầng hay khởi động dự án mới, chúng tôi luôn sẵn sàng giúp bạn tối ưu hóa chiến lược, thiết kế và hiệu suất cloud. Liên hệ ngay để được tư vấn miễn phí. Không áp lực, chỉ là cuộc trò chuyện chuyên sâu và tập trung.
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-blue-600">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <blockquote className="text-gray-900 mb-6 leading-relaxed">
                "Họ là đối tác hoàn hảo cho loại hình phát triển hạ tầng cloud và thiết kế giải pháp mà doanh nghiệp của chúng tôi cần. VCLOUD đã giúp chúng tôi tối ưu hóa toàn bộ hệ thống và nâng cao hiệu suất đáng kể."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">Nguyễn Minh Khang</div>
                <div className="text-gray-600">Giám đốc IT, Tập đoàn ABC Technology</div>
              </div>
            </div>
          </div>

          {/* Right Form Container - 60% */}
          <div className="lg:col-span-3">
            <div className="form-container bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[600px]">
              
              {/* Tabs */}
              <div className="tabs flex border-b border-gray-100">
                <button
                  onClick={() => setActiveTab('message')}
                  className={`tab flex-1 py-6 px-8 text-center font-semibold transition-all duration-300 ${
                    activeTab === 'message'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Thông tin liên hệ
                </button>
                <button
                  onClick={() => setActiveTab('call')}
                  className={`tab flex-1 py-6 px-8 text-center font-semibold transition-all duration-300 ${
                    activeTab === 'call'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Đặt lịch tư vấn
                </button>
              </div>

              {/* Tab Content */}
              <div className="tab-content h-[550px] overflow-hidden relative">
                {activeTab === 'message' && (
                  <div className="message-form p-8 h-full overflow-y-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-lg font-medium text-gray-900 mb-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-sm font-bold mr-3">01</span>
                            What's your name?
                          </label>
                          <input
                            type="text"
                            {...register("fullName", { required: "Please enter your name" })}
                            placeholder="John Appleseeds"
                            className="w-full px-0 py-3 text-lg text-gray-400 placeholder-gray-400 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200"
                          />
                          {errors.fullName && (
                            <p className="mt-2 text-sm text-red-500">{errors.fullName.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-lg font-medium text-gray-900 mb-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-sm font-bold mr-3">02</span>
                            Your phone
                          </label>
                          <input
                            type="tel"
                            {...register("phone")}
                            placeholder="Phone"
                            className="w-full px-0 py-3 text-lg text-gray-400 placeholder-gray-400 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-lg font-medium text-gray-900 mb-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-sm font-bold mr-3">03</span>
                            Company name
                          </label>
                          <input
                            type="text"
                            {...register("company")}
                            placeholder="Company ABC"
                            className="w-full px-0 py-3 text-lg text-gray-400 placeholder-gray-400 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200"
                          />
                        </div>

                        <div>
                          <label className="block text-lg font-medium text-gray-900 mb-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-sm font-bold mr-3">04</span>
                            Your email
                          </label>
                          <input
                            type="email"
                            {...register("email", { 
                              required: "Please enter your email",
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format"
                              }
                            })}
                            placeholder="example@mail.com"
                            className="w-full px-0 py-3 text-lg text-gray-400 placeholder-gray-400 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200"
                          />
                          {errors.email && (
                            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-900 mb-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-sm font-bold mr-3">05</span>
                          Tell us about your project
                        </label>
                        <textarea
                          {...register("message", { required: "Please tell us about your project" })}
                          rows={4}
                          placeholder="Anything we should know before we have a deeper chat with you"
                          className="w-full px-0 py-3 text-lg text-gray-400 placeholder-gray-400 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200 resize-none"
                        />
                        {errors.message && (
                          <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                        )}
                      </div>

                      <div className="flex justify-end pt-6">
                        <button
                          type="submit"
                          className="bg-gray-900 text-white font-medium py-4 px-12 rounded-full hover:bg-gray-800 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-lg"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {activeTab === 'call' && (
                  <div className="calendly-section h-full w-full relative">
                    
                    {/* Method 1: Calendly Iframe */}
                    {loadMethod === 'iframe' && !showFallback && (
                      <div className="calendly-container w-full h-full relative overflow-hidden">
                        {/* Loading state */}
                        {isLoading && !calendlyLoaded && (
                          <div className="loading-overlay absolute inset-0 flex flex-col items-center justify-center bg-white z-20">
                            <div className="loading-spinner w-12 h-12 border-4 border-gray-200 border-l-blue-600 rounded-full animate-spin mb-6"></div>
                            <p className="text-gray-600 text-lg font-medium">Đang tải lịch đặt cuộc gọi...</p>
                            <p className="text-gray-400 text-sm mt-2">Phương thức: Iframe</p>
                          </div>
                        )}

                        <iframe
                          ref={iframeRef}
                          src={getCalendlyUrl()}
                          width="100%"
                          height="500"
                          frameBorder="0"
                          scrolling="yes"
                          title="Đặt lịch cuộc gọi với VCLOUD"
                          onLoad={handleIframeLoad}
                          onError={handleIframeError}
                          allow="geolocation; microphone; camera"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
                          className="calendly-iframe w-full h-full border-0 bg-white block"
                          style={{
                            minWidth: '320px',
                            height: '500px',
                            border: 'none',
                            borderRadius: '0',
                            background: 'white',
                            display: 'block'
                          }}
                        />
                      </div>
                    )}

                    {/* Method 2: Script-based widget */}
                    {loadMethod === 'script' && !showFallback && (
                      <div className="script-container w-full h-full relative">
                        {/* Loading state */}
                        {isLoading && !calendlyLoaded && (
                          <div className="loading-overlay absolute inset-0 flex flex-col items-center justify-center bg-white z-20">
                            <div className="loading-spinner w-12 h-12 border-4 border-gray-200 border-l-blue-600 rounded-full animate-spin mb-6"></div>
                            <p className="text-gray-600 text-lg font-medium">Đang khởi tạo widget...</p>
                            <p className="text-gray-400 text-sm mt-2">Phương thức: Script</p>
                          </div>
                        )}

                        <div 
                          ref={widgetRef}
                          className="w-full bg-white"
                          style={{ 
                            minHeight: '500px', 
                            height: '500px',
                            width: '100%',
                            borderRadius: '0',
                            backgroundColor: '#ffffff'
                          }}
                        />
                      </div>
                    )}

                    {/* Method 3: Direct Link Method (Fallback) */}
                    {loadMethod === 'direct' && (
                      <div className="direct-calendly-section p-8 h-full flex items-center justify-center">
                        <div className="text-center max-w-lg mx-auto">
                          <div className="mb-8">
                            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <span className="text-4xl">📅</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Đặt cuộc gọi tư vấn miễn phí</h3>
                            <p className="text-gray-600 mb-8">Cuộc gọi 30 phút để thảo luận về nhu cầu cloud infrastructure của bạn</p>
                          </div>
                          
                          <div className="info-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="info-item flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                              <span className="icon text-2xl mb-2">⏰</span>
                              <span className="text-sm font-medium text-gray-700">30 phút</span>
                            </div>
                            <div className="info-item flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                              <span className="icon text-2xl mb-2">📞</span>
                              <span className="text-sm font-medium text-gray-700">Google Meet</span>
                            </div>
                            <div className="info-item flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                              <span className="icon text-2xl mb-2">💬</span>
                              <span className="text-sm font-medium text-gray-700">Miễn phí</span>
                            </div>
                          </div>

                          <p className="text-sm text-gray-500 mb-8">
                            Cuộc gọi để làm quen và kiểm tra xem chúng tôi có phù hợp với nhu cầu của bạn và doanh nghiệp của bạn không.
                          </p>

                          <div className="action-buttons flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                              href="https://calendly.com/dangtanliem37/30min"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="primary-btn bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                            >
                              <span>📅</span>
                              Đặt lịch ngay
                            </a>
                            <button 
                              className="retry-btn border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                              onClick={retryCalendly}
                            >
                              <span>🔄</span>
                              Thử widget lại
                            </button>
                          </div>

                          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-sm text-green-700">
                              ✅ Click "Đặt lịch ngay" để mở Calendly trong tab mới!
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Enhanced Fallback - Only show if all methods fail */}
                    {showFallback && (
                      <div className="calendly-fallback p-8 h-full flex items-center justify-center">
                        <div className="fallback-content text-center max-w-lg mx-auto">
                          <div className="mb-8">
                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <span className="text-3xl">⚠️</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Có lỗi kỹ thuật</h3>
                            <p className="text-gray-600 mb-8">Xin lỗi, có lỗi kỹ thuật với widget. Vui lòng sử dụng link trực tiếp để đặt lịch.</p>
                          </div>

                          <div className="fallback-buttons flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a 
                              href="https://calendly.com/dangtanliem37/30min"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="external-btn bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                              <span>🔗</span>
                              Đặt lịch trực tiếp
                            </a>
                            <button 
                              className="retry-btn border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                              onClick={retryCalendly}
                            >
                              <span>🔄</span>
                              Thử lại
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .loading-spinner {
          animation: spin 1s linear infinite;
        }
        
        .calendly-iframe {
          width: 100% !important;
          height: 500px !important;
          border: none !important;
          border-radius: 0 !important;
          background: white !important;
          display: block !important;
        }
        
        .loading-overlay {
          background: rgba(255, 255, 255, 0.95);
          z-index: 20;
        }
        
        .calendly-section {
          background: #ffffff;
          overflow: hidden;
        }
        
        .calendly-container {
          width: 100%;
          height: 500px;
          position: relative;
          overflow: hidden;
        }
        
        .script-container {
          width: 100%;
          height: 500px;
          position: relative;
        }
        
        @media (max-width: 768px) {
          .calendly-iframe {
            height: 450px !important;
          }
          
          .calendly-container,
          .script-container {
            height: 450px;
          }
          
          .info-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .action-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
} 