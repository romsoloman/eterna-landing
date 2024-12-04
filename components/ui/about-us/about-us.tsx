import React from "react"
import Divider from "./divider"

const AboutUs = () => {
  return (
    <div className="px-8 my-10 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-3xl">קצת עלינו</h1>
      <div className="text-center leading-[28px] text-gray-600">
        ברוכים הבאים ל- Eterna – מסורת, איכות ותשוקה לתכשיטים. אנו דור שלישי
        בענף היהלומים, וממשיכים את דרכו של סבנו שהיה לוטש יהלומים ואבינו שסוחר
        ביהלומים. החזון שלנו משלב מורשת משפחתית עשירה עם עיצוב חדשני ודיוק שאין
        שני לו. במהלך השנים פיתחנו הבנה עמוקה של כל שלבי המסע – מהיהלום הגולמי
        ועד לתכשיט המושלם, וכל תכשיט שאנחנו יוצרים מספר סיפור של אומנות, איכות
        ויוקרה. אנחנו כאן כדי ליצור עבורך תכשיטים שמסמלים רגעים בלתי נשכחים
        ומלווים אותך לאורך החיים, כל זאת עם דגש על שירות אישי ואמין.
      </div>
      <Divider />
    </div>
  )
}

export default AboutUs
