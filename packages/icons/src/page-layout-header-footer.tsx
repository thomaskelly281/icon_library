import { mdiPageLayoutHeaderFooter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PageLayoutHeaderFooter(props: IconComponentProps) {
  return <Icon path={mdiPageLayoutHeaderFooter} {...props} />;
}

export { mdiPageLayoutHeaderFooter as path };
