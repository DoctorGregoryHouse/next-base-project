"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({ necessary: true, analytics: true, marketing: true });
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ necessary: true, analytics: true, marketing: true })
    );
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
  };

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-background shadow-lg p-6 z-50"
        >
          <div className="max-w-4xl mx-auto border border-gray-200  p-6">
            <h2 className="text-xl font-bold mb-4">Cookie-Hinweis</h2>
            <p className="mb-4">
              Wir verwenden auf dieser Website ausschließlich technisch
              notwendige Cookies, die für den Betrieb der Seite erforderlich
              sind. Diese Cookies gewährleisten grundlegende Funktionen und
              Sicherheitsmerkmale der Website. <br />
              Zusätzlich nutzen wir Plausible Analytics, ein
              datenschutzfreundliches Analyse-Tool, um die Nutzung unserer
              Website zu verstehen und zu verbessern. Plausible sammelt keine
              personenbezogenen Daten und verwendet keine Cookies für das
              Tracking. <br />
              Durch die weitere Nutzung dieser Website erklären Sie sich mit der
              Verwendung der beschriebenen Cookies und Analyse-Tools
              einverstanden.
            </p>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="mr-2"
                />
                <span>Notwendig (Immer Aktiv)</span>
              </label>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handlePreferenceChange("analytics")}
                  className="mr-2"
                />
                <span>Analytics</span>
              </label>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => handlePreferenceChange("marketing")}
                  className="mr-2"
                />
                <span>Marketing</span>
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Auswahl speichern
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Alle Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
