import tfkBg from '../../assets/tfkBg.png';
import Header from "../organisms/header";
import Footer from "../organisms/footer";
import IndexContent from "../organisms/indexContent";

function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${tfkBg})` }}
    >
      <Header />
      <IndexContent/>
      <Footer/>
    </div>
  );
}

export default HomePage;