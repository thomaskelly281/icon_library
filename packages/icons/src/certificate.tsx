import { mdiCertificate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Certificate(props: IconComponentProps) {
  return <Icon path={mdiCertificate} {...props} />;
}

export { mdiCertificate as path };
