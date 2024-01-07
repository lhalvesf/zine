import Image from 'next/image'
import styles from './page.module.css'
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Card>
          <CardBody>
            <Text>Home page do blog do caos</Text>
          </CardBody>
        </Card>
      </div>
    </main>
  )
}
