import { mdiPageLayoutFooter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PageLayoutFooter(props: IconComponentProps) {
  return <Icon path={mdiPageLayoutFooter} {...props} />;
}

export { mdiPageLayoutFooter as path };
