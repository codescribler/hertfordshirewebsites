import Link from 'next/link';
import { blogCategories } from '@/lib/blog';

interface CategoryBadgeProps {
  category: string;
  clickable?: boolean;
}

export default function CategoryBadge({ category, clickable = true }: CategoryBadgeProps) {
  const categoryData = blogCategories.find(cat => cat.id === category);
  
  if (!categoryData) return null;
  
  const colors = {
    'industry-guides': 'bg-blue-500',
    'local-business': 'bg-green-500',
    'website-tips': 'bg-purple-500',
    'success-stories': 'bg-orange-500',
  };
  
  const bgColor = colors[category as keyof typeof colors] || 'bg-primary-500';
  
  const Badge = () => (
    <span className={`${bgColor} text-white text-xs py-1 px-2 rounded`}>
      {categoryData.name}
    </span>
  );
  
  if (clickable) {
    return (
      <Link href={categoryData.slug}>
        <Badge />
      </Link>
    );
  }
  
  return <Badge />;
}
