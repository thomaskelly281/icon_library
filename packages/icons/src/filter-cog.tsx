import { mdiFilterCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterCog(props: IconComponentProps) {
  return <Icon path={mdiFilterCog} {...props} />;
}

export { mdiFilterCog as path };
