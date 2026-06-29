import { mdiWikipedia } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wikipedia(props: IconComponentProps) {
  return <Icon path={mdiWikipedia} {...props} />;
}

export { mdiWikipedia as path };
