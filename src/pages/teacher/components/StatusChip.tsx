interface StatusChipProps {
    status: 'success' | 'warning' | 'danger' | 'info';
    label?: string;
  }
  
  const statusStyles: Record<StatusChipProps['status'], string> = {
    success: 'bg-green-100 text-green-600',
    warning: 'bg-yellow-100 text-yellow-600',
    danger: 'bg-red-100 text-red-600',
    info: 'bg-blue-100 text-blue-600',
  };
  
  const dotColors: Record<StatusChipProps['status'], string> = {
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500',
  };
  
  const StatusChip = ({ status, label }: StatusChipProps) => {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium ${statusStyles[status]}`}
      >
        <span className={`w-2 h-2 rounded-full ${dotColors[status]}`}></span>
        {label || status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    );
  };
  
  export default StatusChip;
  