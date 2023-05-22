import styles from "@/styles/Form.module.scss"

const Form = () => {
  return (
  <form className={styles.form}>
    <div className={styles.formTags}>
    <label for="subject">Subject</label>
    <input type="text" id="subject" name="subject"/>
    </div>
    <div className={styles.formTags}>
    <label for="email">Your email</label>
    <input type="email" id="email" name="email" />
    </div>
    <div className={styles.formTags}>
    <label for="content">message</label>
    <textarea rows="10"></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
  )
}

export default Form