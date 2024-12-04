import SocialLinks from "../social-links/social-links"

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">פרטי יצירת קשר</h4>
          <p className="text-sm">
            <strong>כתובת:</strong> רחוב סטודיוRS 123, תל אביב, ישראל
          </p>
          <p className="text-sm">
            <strong>שעות פעילות:</strong> ימים א׳-ה׳: 09:00 - 18:00
          </p>
          <p className="text-sm">יום ו׳: 09:00 - 14:00 | שבת: סגור</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm gap-4">
          <SocialLinks />
          <div>
            &copy; {new Date().getFullYear()} סטודיוRS. כל הזכויות שמורות
          </div>
        </div>
      </div>
    </footer>
  )
}
