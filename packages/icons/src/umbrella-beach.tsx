import { mdiUmbrellaBeach } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UmbrellaBeach(props: IconComponentProps) {
  return <Icon path={mdiUmbrellaBeach} {...props} />;
}

export { mdiUmbrellaBeach as path };
