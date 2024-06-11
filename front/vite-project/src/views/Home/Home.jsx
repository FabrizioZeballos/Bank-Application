import styles from "./Home.module.css";
import womanPhone from "../../assets/hero-img.png";
import creditCard from "../../assets/creditcard.png";
import checking from "../../assets/checking.png";
import payment from "../../assets/personal-loan.png";
import profits from "../../assets/investing.png";
import { LearnMoreBtn } from "../../components/LearnMoreBtn/LearnMoreBtn";
import { LearnMoreBtnWhite } from "../../components/LearnMoreBtn/LearnMoreBtnWhite";
import future from "../../assets/future.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIntendedRoute } from "../../redux/userSlice";
import { useEffect } from "react";

export const Home = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSchedule = () => {
    dispatch(setIntendedRoute("/actions"));
    userData.login ? navigate("/actions") : navigate("/login");
  };

  return (
    <div className={styles["general-container"]}>
      <div className={styles["home-container"]}>
        <div className={styles.hero}>
          <h1 className={styles["hero-title"]}>
            Schedule your appointments online
          </h1>
          <p className={styles["hero-description"]}>
            Experience the simplicity and convenience of scheduling your
            appointments with ease.
          </p>
          <button onClick={handleSchedule} className={styles["schedule-btn"]}>
            <p className={styles["schedule-txt"]}>Schedule Now</p>
            <div className={styles["slider-bg"]}></div>
          </button>
        </div>
        <div className={styles["hero-img-container"]}>
          <img src={womanPhone} alt="" className={styles["hero-img"]} />
        </div>
      </div>
      <div>
        <section className={styles["section-type-one"]}>
          <div className={styles["section-left"]}>
            <img className={styles["section-left-img"]} src={checking} alt="" />
          </div>
          <div className={styles["section-right"]} id="checking">
            <h2 className={styles["secondary-title"]}>
              Simplify your finances
            </h2>
            <p className={styles.description}>
              Discover financial freedom with our checking accounts.
              Effortlessly manage your day-to-day expenses, make transactions,
              and enjoy the convenience of easy access to your funds.
            </p>
            <LearnMoreBtn />
          </div>
        </section>
        <section className={styles["section-type-two"]} id="savings">
          <div
            className={`${styles["section-right"]} ${styles["text-section-type-two"]}`}
          >
            <h2
              className={`${styles["secondary-title"]} ${styles["title-section-type-two"]}`}
            >
              Build your financial future
            </h2>
            <p className={styles.description}>
              Start saving for tomorrow with our Savings Accounts and
              Certificates of Deposit (CDs). Watch your money grow with
              competitive interest rates and secure your financial goals.
            </p>
            <LearnMoreBtnWhite />
          </div>
          <div className={styles["card-container"]}>
            <div className={styles["build-future-card"]}>
              <div className={styles["future-img-container"]}>
                <img className={styles["future-img"]} src={future} alt="" />
              </div>
              <div className={styles["future-text"]}>
                Automatically set money aside, earn interest and track your
                savings on the go with our HHBC Mobile® app.
              </div>
            </div>
          </div>
        </section>
        <section className={styles["section-type-one"]} id="credit-card">
          <div className={styles["section-left"]}>
            <img
              className={styles["section-left-img"]}
              src={creditCard}
              alt=""
            />
          </div>
          <div className={styles["section-right"]}>
            <h2 className={styles["secondary-title"]}>
              Empower your purchases
            </h2>
            <p className={styles.description}>
              Elevate your spending experience with our range of credit cards.
              Enjoy rewards, benefits, and flexible payment options tailored to
              suit your lifestyle.
            </p>
            <LearnMoreBtn />
          </div>
        </section>
        <section className={styles["section-type-three"]} id="home-loan">
          <span className={styles["moving-text"]}>
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME
          </span>
          <span
            className={`${styles["moving-text"]} ${styles["moving-text-two"]}`}
          >
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME
          </span>
          <span
            className={`${styles["moving-text"]} ${styles["moving-text-three"]}`}
          >
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME
          </span>
          <span
            className={`${styles["moving-text"]} ${styles["moving-text-four"]}`}
          >
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME
            NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW HOME NEW
            HOME NEW HOME NEW HOME NEW HOME
          </span>
          <div className={styles["type-two-bg"]}>
            <div className={styles["type-two-card"]}>
              <h2 className={styles["secondary-title"]}>
                Unlock the door to your dream home
              </h2>
              <p className={styles.description}>
                Turn your homeownership dreams into reality with our home loan
                solutions. Our competitive rates and personalized service make
                the home buying process smooth and stress-free.
              </p>
              <LearnMoreBtn />
            </div>
          </div>
        </section>
        <section className={styles["section-type-one"]} id="personal-loan">
          <div className={styles["section-left"]}>
            <img className={styles["section-left-img"]} src={payment} alt="" />
          </div>
          <div className={styles["section-right"]}>
            <h2 className={styles["secondary-title"]}>
              Fulfill your aspirations
            </h2>
            <p className={styles.description}>
              Reach your goals with our flexible and affordable personal loans.
              Tailored for vacations, debt consolidation, or education, they
              support your aspirations.
            </p>
            <LearnMoreBtn />
          </div>
        </section>
        <section className={styles["section-type-three"]} id="auto-loan">
          <span className={styles["moving-text"]}>
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
          </span>
          <span
            className={`${styles["moving-text"]} ${styles["moving-text-two"]}`}
          >
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
          </span>
          <span
            className={`${styles["moving-text"]} ${styles["moving-text-three"]}`}
          >
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
          </span>
          <span
            className={`${styles["moving-text"]} ${styles["moving-text-four"]}`}
          >
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
            NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW
            CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR
          </span>
          <div className={styles["type-two-bg"]}>
            <div className={styles["type-two-card"]}>
              <h2 className={styles["secondary-title"]}>
                Hit the road with ease
              </h2>
              <p className={styles.description}>
                Drive away in your dream car with our auto loan solutions.
                Benefit from competitive rates, flexible terms, and a
                streamlined application process.
              </p>
              <LearnMoreBtn />
            </div>
          </div>
        </section>
        <section className={styles["section-type-one"]} id="investing">
          <div className={styles["section-left"]}>
            <img className={styles["section-left-img"]} src={profits} alt="" />
          </div>
          <div className={styles["section-right"]}>
            <h2
              className={`${styles["secondary-title"]} ${styles["special-title-width"]}`}
            >
              Grow your wealth, secure your future
            </h2>
            <p className={styles.description}>
              Seize your financial future with our investment opportunities. Our
              platform equips both seasoned and new investors with tools to grow
              wealth and achieve long-term goals.
            </p>
            <LearnMoreBtn />
          </div>
        </section>
      </div>
    </div>
  );
};
