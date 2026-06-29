import { mdiCheckbook } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Checkbook(props: IconComponentProps) {
  return <Icon path={mdiCheckbook} {...props} />;
}

export { mdiCheckbook as path };
