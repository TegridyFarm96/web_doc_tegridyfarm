import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type Device = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const devices: Device[] = [
  {
    name: 'TBOX',
    description: 'Modular controller for automation and monitoring.',
    image: '/img/home/tbox.webp',
    link: '/docs/tbox/devices/tbox/technical-data',
  },
  {
    name: 'SBOX',
    description: 'Smart expansion module for seamless system scaling.',
    image: '/img/home/sbox.webp',
    link: '/docs/tbox/devices/sbox/technical-data',
  },
  {
    name: 'PBOX',
    description: 'Reliable power distribution and load switching.',
    image: '/img/home/pbox.webp',
    link: '/docs/tbox/devices/pbox/technical-data',
  },
  {
    name: 'VBOX',
    description: 'Accurate voltage, power and energy monitoring.',
    image: '/img/home/vbox.webp',
    link: '/docs/tbox/devices/vbox/technical-data',
  },
  {
    name: 'HBOX',
    description: 'Robust control hardware for demanding environments.',
    image: '/img/home/hbox.webp',
    link: '/docs/tbox/devices/hbox/technical-data',
  },
];

function VideoCard(): ReactNode {
  return (
    <a
      className={styles.videoCard}
      href="https://www.youtube.com/@TegridyFarm"
      target="_blank"
      rel="noopener noreferrer">
      <div className={styles.videoImageWrapper}>
        <img
          className={styles.videoImage}
          src="/img/home/video-thumbnail.webp"
          alt="Latest TegridyFarm video"
        />

        <span className={styles.playButton} aria-hidden="true">
          ▶
        </span>
      </div>

      <div className={styles.videoContent}>
        <span className={styles.eyebrow}>Latest video</span>

        <Heading as="h2" className={styles.videoTitle}>
          TBOX – Next-generation controller
        </Heading>

        <p className={styles.videoDescription}>
          Discover the latest development progress, new functions and upcoming
          additions to the TBOX platform.
        </p>

        <span className={styles.videoLink}>
          Watch on YouTube ↗
        </span>
      </div>
    </a>
  );
}

function DeviceCard({device}: {device: Device}): ReactNode {
  return (
    <Link className={styles.deviceCard} to={device.link}>
      <div className={styles.deviceImageArea}>
        <img
          className={styles.deviceImage}
          src={device.image}
          alt={`${device.name} device`}
        />
      </div>

      <Heading as="h3" className={styles.deviceName}>
        {device.name}
      </Heading>

      <p className={styles.deviceDescription}>{device.description}</p>
    </Link>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation"
      description="TegridyFarm product documentation, hardware information and downloads">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <div className={clsx('container', styles.heroContent)}>
            <span className={styles.heroEyebrow}>Welcome to</span>

            <Heading as="h1" className={styles.heroTitle}>
              <span>Tegridy</span>
              <strong>Farm</strong>
            </Heading>

            <p className={styles.heroSubtitle}>
              Smart hardware, control and monitoring solutions
            </p>

            <VideoCard />
          </div>
        </section>

        <section className={styles.devicesSection}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>TBOX product family</span>

              <Heading as="h2" className={styles.sectionTitle}>
                Our main devices
              </Heading>

              <p className={styles.sectionDescription}>
                A modular family of devices that shares one communication
                platform while providing specialised hardware for each task.
              </p>
            </div>

            <div className={styles.deviceGrid}>
              {devices.map((device) => (
                <DeviceCard key={device.name} device={device} />
              ))}
            </div>

            <div className={styles.allDevicesWrapper}>
              <Link className={styles.allDevicesButton} to="/docs/tbox">
                View TBOX documentation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}