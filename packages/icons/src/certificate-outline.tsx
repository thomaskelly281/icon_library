import { mdiCertificateOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CertificateOutline(props: IconComponentProps) {
  return <Icon path={mdiCertificateOutline} {...props} />;
}

export { mdiCertificateOutline as path };
