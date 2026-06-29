import { mdiStarBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarBox(props: IconComponentProps) {
  return <Icon path={mdiStarBox} {...props} />;
}

export { mdiStarBox as path };
