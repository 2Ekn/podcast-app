function FooterLinks(){
    return(
        <div className="flex flex-col  text-sm text-orange-500 gap-1">
            <a href="/about" className="hover:text-white">Om oss</a>
            <a href="/faq" className="hover:text-white">Vanliga frågor</a>
            <a href="/terms" className="hover:text-white">Köpvillkor</a>
            <a href="/contact" className="hover:text-white">Kontakt</a>
            <a href="/shop" className="hover:text-white">Shop</a>
        </div>
    )
}
export default FooterLinks;