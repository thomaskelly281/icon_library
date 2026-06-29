import { mdiBikePedalClipless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BikePedalClipless(props: IconComponentProps) {
  return <Icon path={mdiBikePedalClipless} {...props} />;
}

export { mdiBikePedalClipless as path };
