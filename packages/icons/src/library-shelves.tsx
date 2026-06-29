import { mdiLibraryShelves } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LibraryShelves(props: IconComponentProps) {
  return <Icon path={mdiLibraryShelves} {...props} />;
}

export { mdiLibraryShelves as path };
