import { mdiPageLayoutHeader } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PageLayoutHeader(props: IconComponentProps) {
  return <Icon path={mdiPageLayoutHeader} {...props} />;
}

export { mdiPageLayoutHeader as path };
