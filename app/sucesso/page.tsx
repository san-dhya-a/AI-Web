import Header from "@/components/layout/header";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import SuccessView from "@/components/success/success-view";

export default function SucessoPage() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
            <Header />
            <Banner />
            <SuccessView />
            <Footer />
        </div>
    );
}
