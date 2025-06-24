export interface ComputePlan {
  name: string;
  vcpu: number;
  ram: number;
  type: 'standard' | 'memory' | 'cpu';
}

export const computePlans: ComputePlan[] = [
  { name: 'vnw1-standard-1-2', vcpu: 1, ram: 2, type: 'standard' },
  { name: 'vnw2-standard-2-4', vcpu: 2, ram: 4, type: 'standard' },
  { name: 'vnw3-standard-2-8', vcpu: 2, ram: 8, type: 'standard' },
  { name: 'vnw4-standard-4-8', vcpu: 4, ram: 8, type: 'standard' },
  { name: 'vnw5-standard-4-16', vcpu: 4, ram: 16, type: 'standard' },
  { name: 'vnw6-standard-8-16', vcpu: 8, ram: 16, type: 'standard' },
  { name: 'vnw7-standard-8-32', vcpu: 8, ram: 32, type: 'standard' },
  { name: 'vnw8-standard-16-32', vcpu: 16, ram: 32, type: 'standard' },
  { name: 'vnw9-standard-16-64', vcpu: 16, ram: 64, type: 'standard' },
  { name: 'vnw10-standard-32-64', vcpu: 32, ram: 64, type: 'standard' },
  { name: 'vnw11-standard-32-128', vcpu: 32, ram: 128, type: 'standard' },
  { name: 'vnw12-memory-2-16', vcpu: 2, ram: 16, type: 'memory' },
  { name: 'vnw13-memory-4-32', vcpu: 4, ram: 32, type: 'memory' },
  { name: 'vnw14-memory-8-64', vcpu: 8, ram: 64, type: 'memory' },
  { name: 'vnw15-memory-16-128', vcpu: 16, ram: 128, type: 'memory' },
  { name: 'vnw16-memory-32-256', vcpu: 32, ram: 256, type: 'memory' },
  { name: 'vnw17-cpu-2-2', vcpu: 2, ram: 2, type: 'cpu' },
  { name: 'vnw18-cpu-4-4', vcpu: 4, ram: 4, type: 'cpu' },
  { name: 'vnw19-cpu-8-8', vcpu: 8, ram: 8, type: 'cpu' },
  { name: 'vnw20-cpu-16-16', vcpu: 16, ram: 16, type: 'cpu' },
  { name: 'vnw21-cpu-32-32', vcpu: 32, ram: 32, type: 'cpu' },
]; 