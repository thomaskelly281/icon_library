import { mdiTwitter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Twitter(props: IconComponentProps) {
  return <Icon path={mdiTwitter} {...props} />;
}

export { mdiTwitter as path };
