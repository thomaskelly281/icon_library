import { mdiFileCertificateOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCertificateOutline(props: IconComponentProps) {
  return <Icon path={mdiFileCertificateOutline} {...props} />;
}

export { mdiFileCertificateOutline as path };
