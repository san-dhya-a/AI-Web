import Header from "@/components/layout/header";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import SuccessView from "@/components/success/success-view";

export default function FaleConoscoSuccessPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col font-sans">
            <Header />
            <Banner
                title="FALE CONOSCO"
                subtitle="Dúvidas, críticas ou sugestões? Entre em contato conosco."
            />
            <SuccessView
                topText="A SUA MENSAGEM FOI"
                bottomText="ENVIADA COM SUCESSO!"
                backHref="/"
            />
            <Footer />
        </div>
    );
}
