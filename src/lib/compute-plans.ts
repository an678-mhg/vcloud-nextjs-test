export interface ComputePlan {
  id: string;
  name: string;
  type: 'standard' | 'memory' | 'cpu';
  vcpu: number;
  ram: number;
}

export const computePlans: ComputePlan[] = [
  // Standard Plans
  {
    id: 'vnw1-standard-1-2',
    name: 'VNW1-STANDARD-1-2',
    type: 'standard',
    vcpu: 1,
    ram: 2
  },
  {
    id: 'vnw1-standard-2-4',
    name: 'VNW1-STANDARD-2-4',
    type: 'standard',
    vcpu: 2,
    ram: 4
  },
  {
    id: 'vnw1-standard-4-8',
    name: 'VNW1-STANDARD-4-8',
    type: 'standard',
    vcpu: 4,
    ram: 8
  },
  {
    id: 'vnw1-standard-8-16',
    name: 'VNW1-STANDARD-8-16',
    type: 'standard',
    vcpu: 8,
    ram: 16
  },

  // Memory Optimized Plans
  {
    id: 'vnw1-memory-2-8',
    name: 'VNW1-MEMORY-2-8',
    type: 'memory',
    vcpu: 2,
    ram: 8
  },
  {
    id: 'vnw1-memory-4-16',
    name: 'VNW1-MEMORY-4-16',
    type: 'memory',
    vcpu: 4,
    ram: 16
  },
  {
    id: 'vnw1-memory-8-32',
    name: 'VNW1-MEMORY-8-32',
    type: 'memory',
    vcpu: 8,
    ram: 32
  },
  {
    id: 'vnw1-memory-16-64',
    name: 'VNW1-MEMORY-16-64',
    type: 'memory',
    vcpu: 16,
    ram: 64
  },

  // CPU Optimized Plans
  {
    id: 'vnw1-cpu-2-2',
    name: 'VNW1-CPU-2-2',
    type: 'cpu',
    vcpu: 2,
    ram: 2
  },
  {
    id: 'vnw1-cpu-4-4',
    name: 'VNW1-CPU-4-4',
    type: 'cpu',
    vcpu: 4,
    ram: 4
  },
  {
    id: 'vnw1-cpu-8-8',
    name: 'VNW1-CPU-8-8',
    type: 'cpu',
    vcpu: 8,
    ram: 8
  },
  {
    id: 'vnw1-cpu-16-16',
    name: 'VNW1-CPU-16-16',
    type: 'cpu',
    vcpu: 16,
    ram: 16
  }
]; 