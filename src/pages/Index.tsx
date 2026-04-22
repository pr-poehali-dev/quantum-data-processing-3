export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">TRAFFIC*LAB</div>
        <nav>
          <a href="#">Услуги</a>
          <a href="#">Кейсы</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Получить аудит</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              БЕЗ СЛИВА,
              <br />
              ТОЛЬКО <span>ТРАФИК</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Продвигаем сайты в поиске и рекламе. Больше клиентов — меньше расходов. Работаем на результат, а не на отчёты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Оставить заявку
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Наши кейсы
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ background: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}>
            <div className="sticker">
              ТОП-1
              <br />
              В ПОИСКЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #SEO
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              РЕКЛАМА
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * SEO ЧТО РАБОТАЕТ * КОНТЕКСТНАЯ РЕКЛАМА * РОСТ ЗАЯВОК * САЙТЫ ПОД КЛЮЧ * GOOGLE & ЯНДЕКС *
            SEO ЧТО РАБОТАЕТ * КОНТЕКСТНАЯ РЕКЛАМА * РОСТ ЗАЯВОК * САЙТЫ ПОД КЛЮЧ * GOOGLE & ЯНДЕКС
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ УСЛУГИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все услуги
            </a>
          </div>

          <div className="menu-grid">
            {/* SEO */}
            <div className="menu-card">
              <span className="menu-tag">Хит</span>
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="SEO продвижение"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>SEO-продвижение</h3>
                  <span className="price">от 25 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Выводим сайт в топ Яндекса и Google. Органический трафик — без слива бюджета.
                </p>
              </div>
            </div>

            {/* Контекстная реклама */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Быстрый старт
              </span>
              <img
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Контекстная реклама"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Контекстная реклама</h3>
                  <span className="price">от 20 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Яндекс Директ и Google Ads. Клиенты уже на следующий день после запуска.</p>
              </div>
            </div>

            {/* Сайты */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Сайт под ключ"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Сайт под ключ</h3>
                  <span className="price">от 50 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Лендинг или корпоративный сайт с упором на конверсию и скорость загрузки.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">РЕЗУЛЬТАТ — НЕ ОБЕЩАНИЕ.</h2>
            <p className="vibe-text">
              Мы не продаём воздух. Каждый проект — это конкретные цифры: рост трафика, снижение стоимости заявки и реальные продажи. Работаем прозрачно: еженедельные отчёты, честная аналитика, без скрытых платежей.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нашем подходе
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            НАШИ КЕЙСЫ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Кейс 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Кейс 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Кейс 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Кейс 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">TRAFFIC*LAB</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Агентство интернет-рекламы. Продвигаем бизнес в сети с 2018 года. Реальные результаты без воды.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Услуги
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Кейсы
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика конфиденциальности
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>info@trafficlab.ru</li>
            <li>+7 (800) 000-00-00</li>
            <li>Пн–Пт: 9:00–18:00</li>
            <li>Бесплатный аудит сайта</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
