import { mdiFingerprint } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fingerprint(props: IconComponentProps) {
  return <Icon path={mdiFingerprint} {...props} />;
}

export { mdiFingerprint as path };
