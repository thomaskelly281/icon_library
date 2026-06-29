import { mdiSignatureText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignatureText(props: IconComponentProps) {
  return <Icon path={mdiSignatureText} {...props} />;
}

export { mdiSignatureText as path };
