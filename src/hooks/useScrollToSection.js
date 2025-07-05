/**
 * Custom hook for scroll to section functionality
 */
export const useScrollToSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { scrollToSection };
};
