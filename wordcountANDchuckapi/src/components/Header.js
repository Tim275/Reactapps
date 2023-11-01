export const Header = ({heading, subHeading,subsubHeading}) => {
  return (
    <section className="header">
        <h1 data-testid="heading">{heading}</h1>
        <h3 data-testid="subHeading">{subHeading}</h3>
        <h5 data-testid="subsubHeading">{subsubHeading} </h5>
    </section>
  )
}