import { ArrowRight } from 'lucide-react'; // You can use Lucide icons or any other icon library

function ContactUs() {
  return (
    <div className="w-[80%] bg-[#0649E7] rounded-3xl flex items-center justify-between px-10 py-6 text-white h-60">
 
      <div className="text-left">
        <div className="text-sm font-medium leading-tight">STILL HAVE<br />DOUBTS?</div>
      </div>

  
      <div className="text-3xl font-bold text-center">
        Contact us
      </div>

      <div className="flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <ArrowRight className="text-[#0649E7]" size={24} />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
