import { useHomePage } from "../useHomePage"
import { Tag } from "@/components/tag"
import Link from "next/link"
import styles from "./styles.module.scss"
import { Loading } from "@/components/loading"
import Image from "next/image"
function ResultImage() {

    const { loading, error, image, prompt } = useHomePage()

    if (error) return <p className={styles.error}>{error.message}</p>
    if (!loading && !image) return null;
    return (

        <div className={styles.resultImage}>
            <div className={styles.animation}>
                {loading ? (
                    <div className={styles.resultImage}>
                        <div className={styles.animation}>
                            <Loading/>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={styles.content}>
                            <p>{prompt}</p>
                            <Tag
                                className={styles.download}
                                title={
                                    <Link href={image} target="_blank" download>
                                        Download
                                    </Link>
                                }
                            />
                        </div>
                        <Image src={image} alt={prompt} width={512} height={512} />
                    </>
                )}
            </div>
        </div>
    );

}

export { ResultImage }