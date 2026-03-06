import Header from "@/components/layout/header";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import SuccessView from "@/components/success/success-view";

export default function MinhaContaSuccessPage() {
    return (
        <div className="bg-white font-sans">
            <Header />
            <Banner />
            <SuccessView
                topText="A SUA CONTA FOI"
                bottomText="ATUALIZADA COM SUCESSO!"
                backHref="/"
            />
            <Footer />
        </div>
    );
}
