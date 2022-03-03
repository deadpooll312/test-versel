import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <div className="mt-5">
    <Link className="text-muted" href="/lk/legal/rules/">
      Пользовательское соглашение
    </Link>

    <Link className="text-muted mx-lg-3" href="/lk/legal/confidential/">
      Политика конфиденциальности
    </Link>

    <Link className="text-muted" href="/lk/support">
      Поддержка
    </Link>
  </div>
);

export default Footer;
