import Image from 'next/image';
import 'app/about/about.scss';
import 'app/page.scss';

export default function ProfilePic() {
  return (
    <section className="profile">
      <Image
        className="profile__image"
        src="/images/profile-pic.jpg"
        width={200}
        height={200}
        alt="Katie Hughes"
        priority
      />
    </section>
  );
}
