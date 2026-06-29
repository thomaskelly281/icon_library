import { mdiSignatureImage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignatureImage(props: IconComponentProps) {
  return <Icon path={mdiSignatureImage} {...props} />;
}

export { mdiSignatureImage as path };
