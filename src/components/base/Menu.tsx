import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-4 p-4 text-[var(--color-primary)]">
        <img src="/images/logo.webp" alt="" className="w-28" />
        <div>
          <svg
            onClick={handleToggle}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-right sm:hidden"
          >
            <line x1="21" x2="3" y1="6" y2="6"></line>
            <line x1="21" x2="9" y1="12" y2="12"></line>
            <line x1="21" x2="7" y1="18" y2="18"></line>
          </svg>
        </div>

        <nav className="hidden font-light text-[var(--color-gray-dark)] sm:flex">
          <ul className="items-baseline space-y-1.5 text-center sm:flex [&>li]:px-2">
            <li>
              <a href="#about" className="hover:text-[var(--color-primary)]">
                Quiénes somos
              </a>
            </li>
            <li>
              <a href="#mexico" className="hover:text-[var(--color-primary)]">
                Tours de México
              </a>
            </li>
            <li>
              <a
                href="#international"
                className="hover:text-[var(--color-primary)]"
              >
                Viajes Internacionales
              </a>
            </li>
            <li>
              <a href="#weidding" className="hover:text-[var(--color-primary)]">
                Bodas Destino
              </a>
            </li>
            <li>
              <a href="#groups" className="hover:text-[var(--color-primary)]">
                Grupos y Convenciones
              </a>
            </li>
            <li>
              <a href="#groups" className="hover:text-[var(--color-primary)]">
                Coordinación de Eventos
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[var(--color-primary)]">
                Tramites de Visas y Pasaporte
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="https://www.reservatuviaje.mx/default.aspx?agentID=1325"
          target="_blank"
          className="hidden sm:flex"
        >
          <button className="hidden rounded-3xl bg-[#626cec] px-4 py-2 text-sm text-white sm:flex">
            Reservas
          </button>
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-4 px-4"
          >
            <nav className="font-light text-[var(--color-gray-dark)]">
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="#about"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Quiénes somos
                  </a>
                </li>
                <li>
                  <a
                    href="#mexico"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Tours de México
                  </a>
                </li>
                <li>
                  <a
                    href="#international"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Viajes Internacionales
                  </a>
                </li>
                <li>
                  <a
                    href="#weidding"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Bodas Destino
                  </a>
                </li>
                <li>
                  <a
                    href="#groups"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Grupos y Convenciones
                  </a>
                </li>
                <li>
                  <a
                    href="#groups"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Coordinación de Eventos
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Tramites de Visas y Pasaporte
                  </a>
                </li>
              </ul>
            </nav>
            <button className="rounded-3xl bg-[#626cec] px-4 py-2 text-sm text-white">
              Reservas
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
