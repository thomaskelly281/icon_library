import { mdiRacquetball } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Racquetball(props: IconComponentProps) {
  return <Icon path={mdiRacquetball} {...props} />;
}

export { mdiRacquetball as path };
