import { mdiTumbleDryer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TumbleDryer(props: IconComponentProps) {
  return <Icon path={mdiTumbleDryer} {...props} />;
}

export { mdiTumbleDryer as path };
