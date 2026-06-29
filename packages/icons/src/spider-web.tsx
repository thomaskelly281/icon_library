import { mdiSpiderWeb } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpiderWeb(props: IconComponentProps) {
  return <Icon path={mdiSpiderWeb} {...props} />;
}

export { mdiSpiderWeb as path };
