import { mdiSpider } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Spider(props: IconComponentProps) {
  return <Icon path={mdiSpider} {...props} />;
}

export { mdiSpider as path };
