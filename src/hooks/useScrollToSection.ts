export const useScrollToSection = () => {
  const scrollToSection = (sectionId: string) => {
    // 移除開頭的 #
    const id = sectionId.replace(/^#/, '');
    const element = document.getElementById(id);
    
    if (element) {
      const navbarHeight = 64; // 導航欄高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return scrollToSection;
};
