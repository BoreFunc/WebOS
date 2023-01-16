export default function Head() {
  const WebOSVersion = process.env["VERSION"];
  return (
    <>
      <title>WebOS {WebOSVersion}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="WebOS" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
