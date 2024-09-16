import Image from 'next/image';
import AppForm from './components/AppForm';

export default function Home() {
  return (
    <div className='bg-background min-h-screen pt-8'>
      <AppForm />
    </div>
  );
}