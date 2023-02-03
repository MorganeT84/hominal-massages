import Head from 'next/head'
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout/layout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <h1>Mentions légales</h1>
        <section className="article">
          <div className="description">
            <p>
              Les présentes conditions générales fixent les modalités d’utilisation du site <spans>https://www.nomdedomaine.com</spans>.<br />
              L’utilisateur reconnait en avoir pris connaissance et les accepter.
            </p>
            <ul>
              <li>
                <p>Editeur et responsable de la publication :</p>
                <p>Ce site est édité par Isabelle Hominal.</p>
                <p>SIRET N° ???????????</p>
              </li>
              <li>
                <p>Développé par Tressens Morgane : <a href="https://morganetressens.com" title="lien vers le portfolio de Tressens Morgane">www.morganetressens.com</a></p>
              </li>
              <li>
                <p>Hébergement :</p>
                <p>
                  Ce site est hébergé par Hostinger.<br />
                  Siège social : HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre,<br />
                  joignable par le moyen suivant :https://www.hostinger.fr/contact.
                </p>
              </li>
              <li>
                <p>Données personnelles : </p>
                <p>
                  Les données collectées par le formulaire de contact sont utilisées pour permettre à Isabelle Hominal de vous recontacter, à des fins de prise de rendez-vous notamment.
                  Ce site ne collecte pas de cookies.
                </p>
              </li>
              <li>
                <p>Droits d’auteur :</p>
                <p>
                  La reproduction ou représentation, intégrale ou partielle, du contenu de ce site est interdite  sans autorisation préalable de l’éditeur.<br />
                  La création de liens hypertextes vers ce site est également soumise à l&apos;accord préalable de l’éditeur.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  )
}
