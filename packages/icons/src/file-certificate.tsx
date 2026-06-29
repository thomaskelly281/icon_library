import { mdiFileCertificate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCertificate(props: IconComponentProps) {
  return <Icon path={mdiFileCertificate} {...props} />;
}

export { mdiFileCertificate as path };
