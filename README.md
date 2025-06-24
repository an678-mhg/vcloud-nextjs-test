# VCLOUD - Nền tảng điện toán đám mây cho doanh nghiệp

VCLOUD là một nền tảng điện toán đám mây toàn diện, cung cấp các giải pháp cloud computing hiện đại và đáng tin cậy cho doanh nghiệp.

## Tính năng chính

- Edge Cloud: Hạ tầng sẵn sàng cho phát triển nhanh chóng trên toàn cầu
- Edge Network: Mạng lưới CDN với 100+ PoP đảm bảo tốc độ truy cập nhanh
- Streaming Platform: Nền tảng streaming độ trễ thấp với chất lượng video tối ưu
- Bảo mật cao cấp: DDoS Protection, SSL/TLS, Firewall
- Quản lý dễ dàng: Giao diện trực quan, API linh hoạt
- Hỗ trợ 24/7: Đội ngũ kỹ thuật chuyên nghiệp

## Yêu cầu hệ thống

- Node.js 18.0.0 trở lên
- npm hoặc yarn

## Cài đặt

1. Clone repository:
```bash
git clone https://github.com/your-username/vcloud.git
cd vcloud
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
```

3. Tạo file môi trường:
```bash
cp .env.example .env.local
```

4. Cập nhật các biến môi trường trong file `.env.local`

## Phát triển

Chạy server development:

```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## Build

Build cho production:

```bash
npm run build
# hoặc
yarn build
```

Chạy production build:

```bash
npm run start
# hoặc
yarn start
```

## Công nghệ sử dụng

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with types
- [React](https://reactjs.org/) - UI library

## Cấu trúc thư mục

```
src/
  ├── app/              # App router pages
  ├── components/       # React components
  │   ├── layout/      # Layout components
  │   └── sections/    # Page section components
  ├── styles/          # Global styles
  └── types/           # TypeScript types
```

## Contributing

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add some amazing feature'`)
4. Push lên branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

VNETWORK JSC - [@vcloud](https://twitter.com/vcloud) - support@vnetwork.vn

Project Link: [https://github.com/your-username/vcloud](https://github.com/your-username/vcloud) 