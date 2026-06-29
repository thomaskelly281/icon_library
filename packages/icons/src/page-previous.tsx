import { mdiPagePrevious } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PagePrevious(props: IconComponentProps) {
  return <Icon path={mdiPagePrevious} {...props} />;
}

export { mdiPagePrevious as path };
