import SuccessView from "@/components/success/SuccessView";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function SuccessPage() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1 bg-white flex items-center justify-center">
                <SuccessView />
            </main>
            <Footer />
        </div>
    );
}
