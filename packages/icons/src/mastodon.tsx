import { mdiMastodon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mastodon(props: IconComponentProps) {
  return <Icon path={mdiMastodon} {...props} />;
}

export { mdiMastodon as path };
